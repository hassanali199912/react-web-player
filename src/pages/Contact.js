import ContactCard from "../components/ui/ContactCard";
import ContactSocailCard from "../components/ui/ContactSocailCard";

export default function Contact() {
  return (
    <>
      <div className="container container_main_content">
        <div className="container">
          <div className="row pading-buttom-10 contact-us">
            <div className="col-12">
              <h1 className="title">Contact Us</h1>
              <div className="row">
                <ContactCard
                  icon={"fa-solid fa-envelope"}
                  title={"Email"}
                  text={"hassanalihassan1203@gmail.com"}
                />
                <ContactCard
                  icon={"fa-solid fa-phone"}
                  title={"Phone"}
                  text={"01553880080"}
                />
              </div>
            </div>
            <div className="col-12">
              <h1 className="title">Socail Media</h1>
              <div className="row">
                <ContactSocailCard
                  icon={"fa-brands fa-facebook"}
                  title={"facebook"}
                  link={"https://www.facebook.com/albashmohnds.hassan"}
                
                />
                <ContactSocailCard
                  icon={"fa-brands fa-github"}
                  title={"Github"}
                  link={"https://github.com/hassanali199912"}
                
                />
                <ContactSocailCard
                  icon={"fa-brands fa-linkedin"}
                  title={"Linked in"}
                  link={"https://www.linkedin.com/in/hassan-ali-510b39192/"}
                
                />
                <ContactSocailCard
                  icon={"fa-solid fa-file"}
                  title={"CV"}
                  link={"https://drive.google.com/file/d/1MrLe_ZlwDE9Sx3JePMUUd8jPorC674gn/view?usp=sharing"}
                
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
