"use client"
import Navbar from "@/components/Navbar";
import { AlarmSmoke, ChevronRight, HandPlatter, Mail, MapPin, ParkingCircle, Phone, Star, Wifi } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-4 px-4 lg:px-8">
        <div className="flex items-center gap-2 py-2 border-b-2"><span className="text-slate-500">Hotels </span><ChevronRight size={18} /> Andaman Castle</div>
      </div>

      <div className="flex flex-col lg:flex-row p-4 lg:p-8 gap-4 lg:gap-8">
        <div className="minw-full lg:min-w-[360px] lg:max-w-[360px] flex flex-col rounded-md shadow-md overflow-hidden">
          <img src="/img/image.webp" alt="" className="w-full" />
          <div className="flex justify-between p-4 border-b-2">
            <div className="flex flex-col">
              <p className="font-semibold">Andaman Castel</p>
              <span className="flex gap-1 text-slate-400 items-center text-sm"><MapPin size={16} />South Point, Shadipur, Port Blair</span>
            </div>
            <div className="bg-yellow-400 text-white flex items-center gap-1 px-2 py-1 h-fit text-sm font-bold rounded-md"><Star size={16} /> 4.5</div>
          </div>

          <div className="flex justify-between p-4 border-b-2">
            <div className="flex flex-col">
              <p className="font-semibold">Description</p>
              <span className="flex gap-1 text-slate-400 items-center text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat non ut minus quasi eum iusto debitis ad reiciendis iste porro nihil velit blanditiis sapiente ratione, fugit soluta asperiores. Modi consequuntur quos repudiandae laboriosam repellat sapiente quibusdam veniam culpa nostrum odit.
              </span>
            </div>
          </div>

          <div className="flex flex-col p-4 gap-2">
            <div className="flex justify-between">
              <div className="w-1/2 flex items-center gap-2 text-sm">
                <div className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center"><Wifi size={14} /></div>
                <p>Free wifi</p>
              </div>
              <div className="w-1/2 flex items-center gap-2 text-sm">
                <div className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center"><HandPlatter size={14} /></div>
                <p>Room Service</p>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-1/2 flex items-center gap-2 text-sm">
                <div className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center"><ParkingCircle size={14} /></div>
                <p>Car Parking</p>
              </div>
              <div className="w-1/2 flex items-center gap-2 text-sm">
                <div className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center"><AlarmSmoke size={14} /></div>
                <p>No Smoking</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-4 rounded-md shadow-md p-4">
            <p className="font-semibold uppercase">Feel free to Reach Us</p>
            <div className="flex flex-col gap-2 lg:flex-row justify-between">
              <div className="w-1/2 flex items-center gap-2 text-sm">
                <div className="bg-emerald-100 text-emerald-600 min-w-8 h-8 rounded-full flex items-center justify-center"><Phone size={14} /></div>
                <p>+91 8096453324</p>
              </div>
              <div className="w-1/2 flex items-center gap-2 text-sm">
                <div className="bg-emerald-100 text-emerald-600 min-w-8 h-8 rounded-full flex items-center justify-center"><Mail size={14} /></div>
                <p>travelisland@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-md shadow-md p-4">
            <p className="font-semibold uppercase">Please Fill up the contact form</p>

            <form action='https://formspree.io/f/mayradge' method='POST'>
              <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                  <input type="text" id="name" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="John" required />
                </div>
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input type="email" id="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="john@gmail.com" required />
                </div>
                <div>
                  <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                  <input type="tel" id="phone" name="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="0987654321" pattern="[0-9]{10}" required />
                </div>
                <div>
                  <label for="date" class="block mb-2 text-sm font-medium text-gray-900">Date</label>
                  <input type="text" id="date" name="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="Apr 22, 2024-Apr 23, 2024" required />
                </div>
                <div>
                  <label for="people" class="block mb-2 text-sm font-medium text-gray-900">No. of Peoples</label>
                  <input type="number" id="people" name="peoples" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="2" required />
                </div>
                <div>
                  <label for="rooms" class="block mb-2 text-sm font-medium text-gray-900">No. of Rooms</label>
                  <input type="rooms" id="visitors" name="rooms" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="1" required />
                </div>
              </div>

              <div class="mb-6">
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Message (Optional)</label>
                <textarea rows={4} cols={2} id="message" name="message" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2" placeholder="Hi! I want to ask, ..." />
              </div>
              <button type="submit" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
