import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-300 via-blue-500 to-brown-300">
        <div className="text-center p-6 max-w-lg mx-auto bg-white bg-opacity-80 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TerraHacks</h1>
          <p className="text-xl text-gray-700 mb-6">
            This summer in Toronto, ON!
          </p>
          <p className="text-black font-thin mb-6">
            Join us this summer for a hackathon dedicated to environmental sustainability and innovation.
          </p>
          <div
            className="inline-block px-6 py-3 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 transition duration-300 hover:cursor-not-allowed"
          >
            Full Website Coming Soon!
          </div>
        </div>
      </main>
    </div>
  );
}
