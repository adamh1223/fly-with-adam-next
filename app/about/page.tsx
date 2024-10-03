function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        About
        <span className="bg-primary pb-2 ps-4 pe-3 rounded-lg tracking-widest text-white">
          me
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-5xl mx-auto text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic
        distinctio ducimus temporibus nobis autem laboriosam repellat, magni
        fugiat minima excepturi neque, tenetur possimus nihil atque! Culpa nulla
        labore nam?
      </p>
    </section>
  );
}
export default AboutPage;