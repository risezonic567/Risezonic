import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavForOther from "../components/NavForOther";
import { Helmet } from "react-helmet-async";

export default function BlogDetail() {
  const { url } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBlogs = async () => {
      try {
        const res = await fetch("/data/blog.json");
        const data = await res.json();

        const foundBlog = data.find((b) => b.url === url);
        setBlog(foundBlog);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [url]);

  if (loading)
    return <div className="text-center p-8">Loading...</div>;

  if (!blog)
    return <div className="text-center p-8">Blog not found.</div>;

  return (
    <>
      <NavForOther />

      <Helmet>
        <title>{blog.metatitle}</title>
        <meta name="description" content={blog.metadescription} />
        <meta name="keywords" content={blog.metakeywords} />
        <meta property="og:title" content={blog.metatitle} />
        <meta property="og:description" content={blog.metadescription} />
        <link rel="canonical" href={blog.metacanonical} />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-8 pt-28">
        <img
          loading="lazy"
          src={blog.CoverImage || blog.Image}
          alt={blog.title}
          className="w-full h-[500px] object-cover rounded-xl mb-8"
        />

        <h1 className="text-4xl font-bold mb-2">
          {blog.title}
        </h1>

        <p className="text-gray-500 text-sm mb-8">
          By {blog.author} on{" "}
          {new Date(blog.createdAt).toLocaleDateString()}
        </p>

        <div
          className="
            prose
            max-w-none
            text-gray-800
            leading-relaxed

            [&_img]:w-full
            [&_img]:max-w-full
            [&_img]:h-[500px]
            [&_img]:object-cover
            [&_img]:rounded-xl
            [&_img]:my-6
            [&_img]:block

            [&_h2]:text-3xl
            [&_h2]:font-bold
            [&_h2]:mt-10
            [&_h2]:mb-4

            [&_h3]:text-2xl
            [&_h3]:font-semibold
            [&_h3]:mt-8
            [&_h3]:mb-3

            [&_p]:mb-4
          "
          dangerouslySetInnerHTML={{
            __html: blog.longdescription,
          }}
        />
      </div>
    </>
  );
}