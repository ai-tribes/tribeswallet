const testimonials = [
  {
    content: "Tribes Wallet has completely changed how I interact with my crypto and friends. Having both in one app is a game-changer.",
    author: {
      name: 'Sarah Johnson',
      role: 'Crypto Enthusiast',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    content: "I love that I can send SOL to my friends with just a message. No more copying and pasting wallet addresses!",
    author: {
      name: 'Marcus Chen',
      role: 'NFT Artist',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    content: "The group functionality is perfect for our DAO. We can chat, vote, and manage our treasury all in one place.",
    author: {
      name: 'Alex Rivera',
      role: 'DAO Coordinator',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-secondary-600 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-200">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Loved by crypto users everywhere
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <div key={testimonialIdx} className="rounded-2xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10">
                <blockquote className="text-xl leading-8 text-white">
                  <p>"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    className="h-10 w-10 rounded-full bg-white/10"
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author.name}</div>
                    <div className="text-sm leading-6 text-primary-200">{testimonial.author.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 