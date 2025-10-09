import { Button, Input } from "@/components"
import { CircleArrowOutUpRight } from 'lucide-react';
const ContacForm = () => {
  return (
    <section className="min-h-screen p-5 bg-white">
        <div className="grid md:grid-cols-2 max-w-6xl mx-auto gap-y-4 md:gap-x-4">
            <div className="flex flex-col justify-center items-center p-10 gap-y-4 text-center md:text-left bg-bg-secondary">
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
                <form className="w-full grid gap-y-4 md:grid-cols-2 md:gap-x-2">
                    <Input
                    InputType="text"
                    label="Name"
                    placeholder="Enter your name"
                    customClass="w-full"
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
                    
                    <div className="flex flex-col">
                        <label 
                        className="font-semibold"
                        htmlFor="service">Service</label>
                        <select name="service"
                        className="p-1.5 border-muted-foreground/20 shadow-xs rounded-sm border"
                        >
                            <option
                            className="p-2"
                            value="1">Service</option>
                            <option value="2">Service2</option>
                            <option value="3">Service3</option>
                        </select>
                    </div>
                    <Input 
                    InputType="text"
                    label="Budget"
                    placeholder="Enter your Budget"
                    />
                    <div className="flex flex-col gap-y-2 md:col-span-2">
                        <label
                        className="font-semibold"
                        htmlFor="message">Message</label>
                        <textarea 
                        className="h-20 w-full border-2 rounded"
                        name="message"
                        ></textarea>
                    </div>
                    <Button type="submit" label="Send Email"/>
                </form>
            </div>
    </section>
  )
}

export default ContacForm
