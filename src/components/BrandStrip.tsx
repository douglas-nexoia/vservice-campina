interface BrandItem {
  name: string;
  color?: string;
}

interface BrandStripProps {
  title?: string;
  brands?: BrandItem[];
}

const defaultBrands: BrandItem[] = [
  { name: 'Elettromec', color: '#111111' },
  { name: 'Tramontina', color: '#0054A6' },
  { name: 'DeBacco', color: '#222222' },
  { name: 'Evol', color: '#111111' },
  { name: 'Fischer', color: '#00639A' },
  { name: 'Lofra', color: '#111111' },
  { name: 'Smeg', color: '#222222' },
  { name: 'Brastemp', color: '#333333' },
  { name: 'Electrolux', color: '#041E42' },
];

const BrandStrip = ({ title = 'Marcas que atendemos', brands = defaultBrands }: BrandStripProps) => {
  return (
    <section className="bg-white py-8 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-400 font-medium uppercase tracking-widest mb-6">
          {title}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center px-5 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group cursor-default"
            >
              <span
                className="text-lg font-bold tracking-tight opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ color: brand.color }}
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;
