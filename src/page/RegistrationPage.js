import { Footer } from "../component/Footer";
import { NavigationBar } from "../component/NavigationBar";
import { RegistrationInput } from "../component/RegistrationInput";

export const RegistrationPage = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <RegistrationInput></RegistrationInput>
      <Footer></Footer>
    </div>
  );
};
