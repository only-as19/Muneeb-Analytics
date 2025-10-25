import { TrendingUp } from "lucide-react"

const BlogsNotFound = () => {
  return (
    <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-slate-100 rounded-full mb-6">
              <TrendingUp className="w-12 h-12 text-slate-400" />
            </div>
            <p className="text-3xl font-bold text-slate-800 mb-2">No blogs found</p>
            <p className="text-slate-600">Try selecting a different category</p>
          </div>
  )
}

export default BlogsNotFound
