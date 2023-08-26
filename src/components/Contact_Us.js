import "./Contact_Us.css";

function Contact_Us() {
  return (
    <div className="Contact_Us_Container">
      <h1>إتصل بنا</h1>
      <form>
        <input type="text" placeholder="الإسم" />
        <input type="text" placeholder="البريد الإاكتروني" />
        <input type="text" placeholder="الموضوع" />
        <textarea placeholder="الرسالة" rows="4"></textarea>
        <button>إرسال</button>
      </form>
    </div>
  );
}

export default Contact_Us;
