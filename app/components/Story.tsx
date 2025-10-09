import gsap from "gsap"
import { useRef } from "react"
import AnimatedTitle from "~/components/ui/AnimatedTitle"
import BentoTilt from "~/components/ui/BentoTilt"
import Button from "~/components/ui/Button"

const Story = () => {
  const frameRef = useRef<HTMLImageElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e
    const element = frameRef.current

    if (!element) return

    const rect = element.getBoundingClientRect()
    const xPos = clientX - rect.left
    const yPos = clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((yPos - centerY) / centerY) * -10
    const rotateY = ((xPos - centerX) / centerX) * 10

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    })
  }

  const handleMouseLeave = () => {
    const element = frameRef.current

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      })
    }
  }

  return (
    <section id="story" className="bg-black text-blue-50">
      <div className="container mx-auto">
        <div className="flex size-full flex-col items-center py-10 pb-24">
          <p className="font-general text-sm uppercase md:text-[10px]">
            the multiversal ip world
          </p>

          <div className="relative w-full">
            <AnimatedTitle
              title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />

            <BentoTilt className="relative md:w-[50vw] w-[calc(100%-1.5rem)] mx-auto -mt-20">
              <img
                ref={frameRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseLeave}
                onMouseEnter={handleMouseLeave}
                src="/img/entrance.webp"
                alt="entrance.webp"
                className="rounded-xl"
              />
            </BentoTilt>
          </div>

          <div className="flex w-full justify-center md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
              <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                Where realms converge, lies Zentry and the boundless pillar.
                Discover its secrets and shape your fate amidst infinite
                opportunities.
              </p>

              <Button
                id="realm-btn"
                title="discover prologue"
                containerClass="mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Story
