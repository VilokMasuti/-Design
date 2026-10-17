import Image from "next/image";
import Container from "../Container";

const imageSrc =
  "https://images.unsplash.com/photo-1607113090726-fe0ec71f0d37?w=1000&auto=format&fit=crop&q=60";

export default function Practice() {
  return (
    <main>
      <nav>
        <Container className=" p-4 bg-blue-50 rounded-md">
          <section className=" flex justify-between items-center gap-4">
            <div className=" rounded-full  flex items-center justify-center  w-10 h-10   bg-white">
              <span>V</span>
            </div>
            <div className="  flex gap-4 items-center justify-center">
              <a className="text-2xl font-sans font-bold  text-black ">
                VJournal
              </a>
              <a className="text-2xl font-sans font-bold  text-black ">
                VJournal
              </a>
              <a className="text-2xl font-sans font-bold  text-black ">
                VJournal
              </a>
            </div>
          </section>
        </Container>
      </nav>
      <Container className=" p-4 flex flex-col">
        <article
          className="
            grid min-h-screen grid-cols-1 items-center gap-8
            rounded-md bg-[#c8ff52] p-6
            lg:grid-cols-2 lg:gap-x-20 lg:p-20
            lg:[grid-template-areas:'text-one_image-one'_'image-two_text-two'_'text-three_image-three']
          "
        >
          {/* Row 1: Image left, text right */}
          <div className="lg:[grid-area:text-one]">
            <h3>Write all your journals in a few clicks</h3>
            <p>
              Unlock the simplicity of online journaling. Say goodbye to pen and
              paper and hello to effortless journaling with just a few clicks.
            </p>
          </div>

          <Image
            className="w-full rounded-md object-cover lg:[grid-area:image-one]"
            width={800}
            height={600}
            src={imageSrc}
            alt="Writing in a journal"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />

          {/* Row 2: Image left, text right */}
          <div className="lg:[grid-area:text-two]">
            <h3>Beautifully displayed and neatly organised</h3>
            <p>
              Not just words on a screen — our journals are beautifully
              displayed and neatly organised.
            </p>
          </div>

          <Image
            className="w-full rounded-md object-cover lg:[grid-area:image-two]"
            width={800}
            height={600}
            src={imageSrc}
            alt="A journal arranged neatly"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />

          {/* Row 3: Text left, image right */}
          <div className="lg:[grid-area:text-three]">
            <h3>Create and reflect from anywhere in the world</h3>
            <p>
              Whether youre at home or exploring the world, create and reflect
              on your experiences, thoughts, and emotions from anywhere on the
              globe.
            </p>
          </div>

          <Image
            className="w-full rounded-md object-cover lg:[grid-area:image-three]"
            width={800}
            height={600}
            src={imageSrc}
            alt="Journaling while travelling"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </article>
        <article className="rounded-md bg-[#c8ff3d] p-6 flex  flex-row mt-4  items-center justify-center gap-10  h-[50rem]">
          <div className="   bg-slate-50 shadow-md shadow-olive-300 w-[15rem] h-[18rem] flex items-center pt-10 flex-col">
            <div className=" rounded-full  flex items-center justify-center  w-10 h-10   bg-black text-white">
              <span>V</span>
            </div>
          </div>
          <div className="   bg-slate-50 shadow-md shadow-olive-300 w-[15rem] h-[18rem] flex items-center pt-10 flex-col">
            <div className=" rounded-full  flex items-center justify-center  w-10 h-10   bg-black text-white">
              <span>V</span>
            </div>
          </div>
          <div className="   bg-slate-50 shadow-md shadow-olive-300 w-[15rem] h-[18rem] flex items-center pt-10 flex-col justify-evenly ">
            <section className=" flex flex-col justify-center items-center gap-2">
              <div className=" flex-col rounded-full  flex items-center justify-center  w-10 h-10   bg-black text-white">
                <span>V</span>
              </div>
              <h1 className=" font-satoshi text-5xl  text-black font-semibold">
                Vision
              </h1>
            </section>
            <section className=" flex flex-col items-center justify-center gap-2 ">
              <h1 className=" font-satoshi text-xs  text-black">
                Marketing Manger
              </h1>
              <div className=" flex gap-6 items-center justify-center">
                <FileHeadphone size={28} />
                <Grape size={28} />
                <Blender size={28} />
              </div>
            </section>
          </div>
        </article>
        <article className="rounded-md bg-[#c8ff3d] p-6 flex  flex-col mt-4  items-center justify-center gap-10  h-[50rem]">
          <section className=" flex flex-col items-center justify-center gap-4">
            <h1 className=" capitalize font-satoshi text-4xl  antialiased font-semibold">
              Om namo venkateshaya
            </h1>
            <p className="  font-inter  text-sm text-pretty">
              A sacred mantra invoking the blessings of Lord Venkateswara,
              symbolizing devotion and spiritual connection.
            </p>
          </section>
        </article>
      </Container>
      <section className=" mt-6  flex   ">
        <div className=" bg-amber-50 w-25  grow">1 </div>
        <div className="bg-yellow-600 w-25 grow-2">2</div>
        <div className="  bg-red-600  w-25 ">3</div>
        <div className=" bg-gray-300 w-25">4</div>
      </section>
    </main>
  );
}
