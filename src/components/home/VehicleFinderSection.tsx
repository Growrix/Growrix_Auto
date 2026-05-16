export default function VehicleFinderSection() {
  return (
    <section className="bg-white pb-14 pt-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden bg-[url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
          <div className="bg-black/70 px-6 py-12 sm:px-10 lg:px-12">
            <div className="max-w-4xl">
              <h2 className="text-[30px] font-black uppercase tracking-tight text-white sm:text-[42px]">Select Your Vehicle</h2>
              <p className="mt-2 text-[14px] font-semibold uppercase tracking-[0.25em] text-white/70">Over 120,000 automotive and truck parts</p>
            </div>
            <div className="mt-8 grid gap-3 lg:grid-cols-[1fr_1fr_1fr_auto]">
              {["Select Make", "Select Model", "Select Year"].map((item) => (
                <div key={item} className="flex h-12 items-center justify-between rounded-sm bg-white px-4 text-[14px] text-[#666] shadow-sm">
                  <span>{item}</span>
                  <span>▾</span>
                </div>
              ))}
              <button className="h-12 rounded-sm bg-[#ff3434] px-6 text-[13px] font-bold uppercase tracking-wide text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
