import RegisterForm from "@/components/hospital/form"
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex h-screen max-h-screen bg-black">
          <section className="remove-scrollbar container">
            <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
              <Image
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                alt="patient"
                className="mb-12 h-10 w-fit"
              />
    
              <RegisterForm/>
    
              <p className="copyright py-12">© 2024 CarePluse</p>
            </div>
          </section>
    
          <Image
            src="/assets/images/register-img.png"
            height={1000}
            width={1000}
            alt="patient"
            className="side-img max-w-[390px]"
          />
        </div>
      );
}
