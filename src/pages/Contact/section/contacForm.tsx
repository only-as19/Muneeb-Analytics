import { Button, Input } from "@/components"
import { CircleArrowOutUpRight } from 'lucide-react';const ContacForm = () => {
  return (
    <section className="min-h-screen p-5">
        <div className="grid md:grid-cols-2">
            <div className="flex flex-col gap-y-2 text-center md:text-left">
                <h1 className="text-2xl font-bold">Lorem, ipsum dolor</h1>
                <p className="text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur sunt veritatis, maiores necessitatibus nulla quidem!</p>
                <Input
                InputType="text"
                placeholder="Enter your request"
                button={{
                    buttonLabel:"send"
                }}
                />
                <div className="flex items-center gap-x-2">
                    <Button label="Video Meeting Appointment" icon={<CircleArrowOutUpRight className="!h-4 !w-4"/>} variant="secondary"/>
                    <Button label="xyz"/>
                </div>
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default ContacForm
