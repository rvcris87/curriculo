interface ModeloEmBreveProps {
  title: string;
}

export function ModeloEmBreve({ title }: ModeloEmBreveProps) {
  return (
    <div className="grid min-h-screen place-items-center bg-[#0b0b0c] px-4 text-center text-[#f4efe7]">
      <div className="max-w-lg rounded-2xl border border-[#c49a67]/25 bg-[#141212] p-8">
        <p className="text-xs tracking-[0.18em] text-[#cda978]">MODELOS</p>
        <h1 className="mt-3 text-2xl font-semibold">{title}</h1>
        <p className="mt-2 text-sm text-[#d2bea1]">Este modelo será publicado em breve.</p>
        <a
          href="/#modelos"
          className="mt-5 inline-flex rounded-lg border border-[#c49a67]/35 px-4 py-2 text-sm text-[#dfc29a] transition hover:border-[#c49a67]/55"
        >
          Voltar para modelos
        </a>
      </div>
    </div>
  );
}
