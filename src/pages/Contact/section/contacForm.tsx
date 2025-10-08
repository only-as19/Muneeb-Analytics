import { Button, Input } from "@/components"
import { CircleArrowOutUpRight } from 'lucide-react';const ContacForm = () => {
  return (
    <section className="min-h-screen p-5 bg-white">
        <div className="grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center gap-y-4 text-center md:text-left">
                <h1 className="md:text-4xl text-2xl font-bold">Lorem, ipsum dolor</h1>
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
            <div>
                <form className="grid gap-y-4 md:grid-cols-2 md:gap-x-4">
                    <Input
                    InputType="text"
                    label="Name"
                    placeholder="Enter your name"
                    />
                    <Input 
                    InputType="number"
                    label="Number"
                    placeholder="Enter your Number"
                    />
                    <Input 
                    InputType="email"
                    label="Email Address"
                    placeholder="Enter your Email"
                    />
                    <Input 
                    InputType="text"
                    label="Name"
                    placeholder="Enter name"
                    />
                    <select className="border-2">
                        <option>Services</option>
                        <option>Service 1</option>
                        <option>Service 2</option>
                        <option>Service 3</option>
                    </select>
                    <Input 
                    InputType="number"
                    label="Budget"
                    placeholder="What's your budget"
                    />
                    <div className="flex flex-col">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" 
                        className="w-full border rounded-md p-5 h-20"
                        ></textarea>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContacForm
