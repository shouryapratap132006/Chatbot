export default async function Page({params}) {
  const {name : chatbotName} =await params;
  return <div>My Post : {chatbotName}</div>;
}