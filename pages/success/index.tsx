import { useRouter } from "next/router";

export default function Success() {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 5000);
  return (
    <div className="flex justify-center items-center py-10">
      <h1 className="text-2xl text-indigo-400 text-center">
        Your Message is successfully sent. I will be back to you as soon as
        possible! Thank you!
      </h1>
    </div>
  );
}
