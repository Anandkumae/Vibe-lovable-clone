import { ProjectForm } from "@/modules/home/ui/components/project-form";
import Image from "next/image"



const Page = () => {

  return (
    <div>
      <section>
        <div>
          <Image 
            src="/logo.svg"
            alt="Vibe"
            width={50}
            height={50}
            className="hidden md:block"
          />
        </div>
        <h1 className="text-2xl md:text-5xl text-muted-foreground text-center">
          Build something with Vibe
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center">
          Create apps and websites by chatting with AI
        </p>
        <div className="max-w-3xl mx-auto w-full">
          <ProjectForm />
        </div>
      </section>
      <ProjectsList />
    </div>
  )
}

export default Page;