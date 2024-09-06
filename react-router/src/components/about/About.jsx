import React from 'react'
import { Users, Rocket, Target, Award } from 'lucide-react'

const About = () => {
  const teamMembers = [
    { name: 'Jane Doe', role: 'CEO & Founder', image: '/placeholder.svg?height=200&width=200' },
    { name: 'John Smith', role: 'CTO', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Alice Johnson', role: 'Head of Design', image: '/placeholder.svg?height=200&width=200' },
    { name: 'Bob Williams', role: 'Lead Developer', image: '/placeholder.svg?height=200&width=200' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground bg-teal-200">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">About TechNova</h1>
          <p className="text-xl mb-8">Revolutionizing the digital landscape, one innovation at a time.</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground">
            At TechNova, we're on a mission to empower businesses and individuals with cutting-edge technology solutions. 
            We believe in pushing the boundaries of what's possible, fostering innovation, and creating a more connected world.
          </p>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Users className="h-12 w-12 mb-4 text-primary" />, title: "Collaboration", description: "We believe in the power of teamwork and diverse perspectives." },
              { icon: <Rocket className="h-12 w-12 mb-4 text-primary" />, title: "Innovation", description: "We constantly push the boundaries of what's possible in tech." },
              { icon: <Target className="h-12 w-12 mb-4 text-primary" />, title: "Customer Focus", description: "Our clients' success is at the heart of everything we do." },
              { icon: <Award className="h-12 w-12 mb-4 text-primary" />, title: "Excellence", description: "We strive for the highest quality in all our endeavors." },
            ].map((value, index) => (
              <div key={index} className="text-center">
                {value.icon}
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">2015</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">The Beginning</h3>
                <p className="text-muted-foreground">TechNova was founded in a small garage with a big dream.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">2018</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Rapid Growth</h3>
                <p className="text-muted-foreground">We expanded our team and moved to our first office.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">2021</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Global Expansion</h3>
                <p className="text-muted-foreground">TechNova went international, opening offices in 5 countries.</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">Now</div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Leading the Industry</h3>
                <p className="text-muted-foreground">Today, we're at the forefront of technological innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Shaping the Future</h2>
          <p className="text-xl mb-8">
            Whether you're looking to partner with us or join our team, we'd love to hear from you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-opacity-90 transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}

export default About