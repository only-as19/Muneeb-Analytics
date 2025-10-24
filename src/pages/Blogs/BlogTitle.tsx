import { BsStars } from "react-icons/bs";

const BlogTitle:React.FC = () => {
  return (
    <div className="special-gradiant text-center md:py-12 px-5 md:px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full mb-6">
              <BsStars className="w-4 h-4 text-emerald-300" />
              <span className="text-sm font-semibold text-emerald-100">Fresh Perspectives</span>
            </div>
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
                Discover Stories
              </span>
              <br />
              <span className="text-emerald-400">That Inspire</span>
            </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Dive into expert insights, cutting-edge trends, and thought-provoking ideas
              that shape the future of technology and design
            </p>
        </div>
    </div>
  )
}

export default BlogTitle
