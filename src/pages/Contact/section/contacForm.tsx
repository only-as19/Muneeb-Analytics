import { Button, Input, Select  } from "@/components"
import { CircleArrowOutUpRight } from 'lucide-react';
import countriesRaw from "world-countries";

const ContacForm = () => {

    const countries = countriesRaw.map(country=>(
        {label:country.name.common ,value:country.cca3}
    )).sort((a,b)=>a.label.localeCompare(b.label))

  return (
    <section className="min-h-screen p-5 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-y-8">
            <div className="text-center">
                <h1 className="text-2xl font-bold md:text-4xl">W&apos;ed love to help</h1>
                <p className="text-muted-foreground md:mt-2">Reach out and we&apos;ll get in touch within 24 hours</p>
            </div>
        <div className="grid md:grid-cols-2 gap-y-4 md:gap-x-4">
            <div className="flex flex-col justify-center items-center p-10 gap-y-2 text-center md:text-left bg-bg-secondary">
                <h1 className="md:text-4xl text-2xl font-bold">Lorem, ipsum dolor</h1>
                <p className="text-muted-foreground">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur sunt veritatis, maiores necessitatibus nulla quidem!</p>
                <Input
                InputType="text"
                placeholder="Enter your request"
                button={{
                    buttonLabel:"send",
                    buttonVariant:"outline"
                }}
                className="bg-white"
                />
                <div className="flex items-center gap-x-2">
                    <Button label="Video Meeting Appointment" icon={<CircleArrowOutUpRight className="!h-4 !w-4"/>} variant="secondary"/>
                    <Button label="xyz"/>
                </div>
            </div>
                <form className="w-full grid gap-y-8 md:grid-cols-2 md:gap-x-6">
                    <Input
                    InputType="text"
                    label="Name"
                    placeholder="Enter your name"
                    customClass="w-full"
                    isRequired={true}
                    />
                    <Input 
                    InputType="number"
                    label="Number"
                    placeholder="Enter your Number"
                    isRequired={true}
                    />
                    <Input 
                    InputType="email"
                    label="Email Address"
                    placeholder="Enter your Email"
                    isRequired={true}
                    />
                    <Input 
                    InputType="text"
                    label="Company Name"
                    placeholder="Company (optional)"
                    />
                    <Select
                    label="Services"
                    placeholder="Services you interested"
                    groupLabel="services"
                    options={[
                        {label:"service1",value:"service1"},
                        {label:"service2",value:"service2"},
                        {label:"service3",value:"service2"}
                    ]}
                    />
                    <Select
                    label="Location"
                    placeholder="Select location"
                    groupLabel="All countries"
                    options={countries}
                    />
                    <Input 
                    InputType="text"
                    label="Budget"
                    placeholder="Enter your Budget"
                    isRequired={true}
                    />
                    <div className="flex flex-col gap-y-2 md:col-span-2">
                        <label
                        className="font-semibold"
                        htmlFor="message">Message</label>
                        <textarea 
                        className="h-20 w-full border-2 rounded p-2 text-sm"
                        name="message"
                        ></textarea>
                    </div>
                    <Button type="submit" label="Send Email" className="md:col-span-2"/>
                </form>
            </div>
            </div>
    </section>
  )
}

export default ContacForm
