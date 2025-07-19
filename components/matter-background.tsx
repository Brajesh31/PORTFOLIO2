"use client"

import { useEffect, useRef } from "react"
import Matter from "matter-js"

interface MatterBackgroundProps {
  className?: string
}

export default function MatterBackground({ className }: MatterBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    // Matter.js modules
    const { Engine, Render, Runner, World, Bodies, Mouse, MouseConstraint, Composite, Common, Body } = Matter

    // Create engine
    const engine = Engine.create({
      gravity: { x: 0, y: 0, scale: 0.001 },
    })
    const world = engine.world

    // Create renderer
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: containerRef.current.clientWidth,
        height: containerRef.current.clientHeight,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio,
      },
    })

    // Configure renderer to be transparent
    render.options.wireframeBackground = "transparent"
    render.options.background = "transparent"

    // Create runner
    const runner = Runner.create()

    // Add bodies
    const bodies: Matter.Body[] = []

    // Check current theme
    const isDarkMode = document.documentElement.classList.contains("dark")

    // Swapped: Light mode colors now use the original dark mode palette
    const lightModeColors = ["#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#3EADCF", "#57D9FF"]
    // Dark mode gets the original light mode colors
    const darkModeColors = ["#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#3EADCF", "#57D9FF"]

    const colors = isDarkMode ? darkModeColors : lightModeColors
    const shapes = ["circle", "rectangle", "polygon"]

    // Increased number of particles for more dynamic effect
    for (let i = 0; i < 150; i++) {
      const shape = shapes[Math.floor(Math.random() * shapes.length)]
      const x = Math.random() * containerRef.current.clientWidth
      const y = Math.random() * containerRef.current.clientHeight
      const color = colors[Math.floor(Math.random() * colors.length)]
      // More varied sizes
      const size = Math.random() * 45 + 5
      // Swapped opacity values: light mode gets higher opacity, dark mode gets lower
      const opacity = isDarkMode ? Math.random() * 0.4 + 0.1 : Math.random() * 0.6 + 0.2

      let body: Matter.Body

      if (shape === "circle") {
        body = Bodies.circle(x, y, size, {
          render: {
            fillStyle: color,
            opacity: opacity,
          },
          frictionAir: 0.015,
          restitution: 0.9,
        })
      } else if (shape === "rectangle") {
        body = Bodies.rectangle(x, y, size * 1.5, size * 1.5, {
          render: {
            fillStyle: color,
            opacity: opacity,
          },
          frictionAir: 0.01,
          restitution: 0.8,
        })
      } else {
        const sides = Math.floor(Math.random() * 4) + 5 // 5 to 8 sides
        body = Bodies.polygon(x, y, sides, size, {
          render: {
            fillStyle: color,
            opacity: opacity,
          },
          frictionAir: 0.01,
          restitution: 0.7,
        })
      }

      // Increased velocity for more motion
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 3,
        y: (Math.random() - 0.5) * 3,
      })

      // Increased angular velocity
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.08)

      bodies.push(body)
    }

    Composite.add(world, bodies)

    // Add mouse control with stronger interaction
    const mouse = Mouse.create(render.canvas)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.3,
        render: {
          visible: false,
        },
      },
    })

    Composite.add(world, mouseConstraint)

    // Keep the mouse in sync with rendering
    render.mouse = mouse

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return
      render.options.width = containerRef.current.clientWidth
      render.options.height = containerRef.current.clientHeight
      render.canvas.width = containerRef.current.clientWidth
      render.canvas.height = containerRef.current.clientHeight
      Render.setPixelRatio(render, window.devicePixelRatio)
    }

    window.addEventListener("resize", handleResize)

    // Enhanced mouse interaction with larger radius and stronger force
    const handleMouseMove = (event: MouseEvent) => {
      const mousePosition = {
        x: event.clientX,
        y: event.clientY,
      }

      bodies.forEach((body) => {
        const bodyPosition = body.position
        const distance = Math.sqrt(
            Math.pow(mousePosition.x - bodyPosition.x, 2) + Math.pow(mousePosition.y - bodyPosition.y, 2),
        )

        if (distance < 180) {
          const force = {
            x: (mousePosition.x - bodyPosition.x) * 0.00004,
            y: (mousePosition.y - bodyPosition.y) * 0.00004,
          }
          Body.applyForce(body, bodyPosition, force)
        }
      })
    }

    document.addEventListener("mousemove", handleMouseMove)

    // Enhanced theme change handler with swapped values
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains("dark")
      const newColors = isDark ? darkModeColors : lightModeColors

      bodies.forEach((body) => {
        const color = newColors[Math.floor(Math.random() * newColors.length)]
        // Swapped opacity values for theme change
        const opacity = isDark ? Math.random() * 0.4 + 0.1 : Math.random() * 0.6 + 0.2

        if (body.render) {
          body.render.fillStyle = color
          body.render.opacity = opacity
        }
      })
    }

    // Create a MutationObserver to watch for class changes on documentElement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setTimeout(handleThemeChange, 100) // Small delay to ensure theme has switched
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    // Add continuous motion to particles
    const addContinuousMotion = () => {
      bodies.forEach((body, index) => {
        const time = Date.now() * 0.001
        const forceX = Math.sin(time + index) * 0.00001
        const forceY = Math.cos(time + index * 0.5) * 0.00001

        Body.applyForce(body, body.position, { x: forceX, y: forceY })
      })
    }

    // Add motion interval
    const motionInterval = setInterval(addContinuousMotion, 50)

    // Run the engine
    Runner.run(runner, engine)
    Render.run(render)

    // Cleanup
    return () => {
      clearInterval(motionInterval)
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousemove", handleMouseMove)
      observer.disconnect()
      Render.stop(render)
      Runner.stop(runner)
      World.clear(world, false)
      Engine.clear(engine)
      render.canvas.remove()
    }
  }, [])

  return (
      <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>
  )
}
