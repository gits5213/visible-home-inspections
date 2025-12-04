export default function TrustBar() {
  return (
    <section className="bg-gray-50 py-8 border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <div className="text-center">
            <p className="font-semibold text-gray-900">NY License #</p>
            <p className="text-sm text-gray-600">[Your License Number]</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900">InterNACHI</p>
            <p className="text-sm text-gray-600">Certified Inspector</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900">Insured & Bonded</p>
            <p className="text-sm text-gray-600">Fully Protected</p>
          </div>
          <div className="text-center">
            <p className="font-semibold text-gray-900">Hundreds of Inspections</p>
            <p className="text-sm text-gray-600">Completed</p>
          </div>
        </div>
        <p className="text-center mt-6 text-gray-700 max-w-3xl mx-auto">
          Visible Home Inspections LLC is a New York–registered company providing residential inspections with clear, easy-to-read reports.
        </p>
      </div>
    </section>
  );
}

