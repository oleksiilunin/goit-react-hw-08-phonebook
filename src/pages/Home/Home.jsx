import Phonebook from '../../assets/Phonebook_8.png';
import { HomeContainer, Text, TextContainer, Title } from './Home.styled';

export default function Home() {
  return (
    <HomeContainer>
      <img src={Phonebook} alt="phonebook" width="512px" />
      <TextContainer>
        <Title>Welcome to the Phonebook</Title>
        <Text>
          Here you can conveniently store and manage your contacts. Phonebook
          provides a simple and intuitive interface for adding, editing, and
          deleting contacts, as well as quickly searching for the information
          you need. Try it today!
        </Text>
      </TextContainer>
    </HomeContainer>
  );
}
