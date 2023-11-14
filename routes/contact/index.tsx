
import MyHeader from "$home/components/MyHeader.tsx";
import ProjectForm from "$home/islands/contact/About.tsx";
import MyContacts from "$home/components/contacts/MyContacts.tsx";
import MyFooter from "$home/components/MyFooter.tsx";

export default function ContactsPage() {
  return(
    <>
      <MyHeader />

      <ProjectForm />

      <MyContacts />

      <MyFooter />
    </>
  );
}

