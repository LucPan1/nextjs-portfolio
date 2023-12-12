const Contact = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <section id="contact">
        <div className="text-white text-center">
          <h1 className="text-4xl font-bold mb-4">Contactez-moi</h1>
          <p className="text-lg mb-6">Vous pouvez me contacter par adresse mail: lucpan2003@gmail.com</p>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-400">Nom</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 mt-1 text-white bg-gray-800 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">E-mail</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 mt-1 text-white bg-gray-800 rounded-md focus:outline-none focus:border-blue-500" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 mt-1 text-white bg-gray-800 rounded-md focus:outline-none focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:border-blue-700">Envoyer</button>
          </form>
        </div>
        </section>
      </div>
    );
  };
  
  export default Contact;