import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-light bg-teal-200">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-4">
            Welcome to Our Amazing Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover a world of possibilities with our cutting-edge solutions. We're here to transform your ideas into reality.
          </p>
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition duration-150 ease-in-out"
          >
            Get Started
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Innovative Solutions", description: "Stay ahead with our cutting-edge technology and forward-thinking approach." },
            { title: "Expert Support", description: "Our team of experts is always ready to assist you every step of the way." },
            { title: "Scalable Platform", description: "Grow your business with our flexible and scalable solutions tailored to your needs." }
          ].map((feature, index) => (
            <div key={index} className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
              <CheckCircle className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="bg-card rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 text-yellow-400" fill="currentColor" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="text-xl italic text-muted-foreground mb-4">
            "This platform has revolutionized the way we do business. The innovative features and exceptional support have been game-changers for our company."
          </blockquote>
          <div className="font-semibold">Jane Doe, CEO of TechCorp</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers and take your business to the next level with our platform.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary-dark transition duration-150 ease-in-out"
          >
            Sign Up Now
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home