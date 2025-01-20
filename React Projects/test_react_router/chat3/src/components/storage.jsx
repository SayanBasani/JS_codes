import { createContext } from "react";
import { useState } from "react";
export const Somecontext = createContext();

export default function ContextProvider({ children }) {

  const Own_details = {
    "userName": "sayan",
    "userId": "abc123",
    "bio": "I am a cool boy",
    "mobile_no.": "1234567890",
    "last_login_details": {
      "date": "1/12/2024",
      "time": "12:12",
      "device": "poco x4 Pro",
      "location": "NaN"
    }
  }

  const sidenav_options_icons = [
    // "bi-person-lines-fill","bi-search","bi-file-play","bi-telephone-fill",
    { opt_name: "MESSAGES", icon_name: "bi-chat-left-text" },
    { opt_name: "SEARCH", icon_name: "bi-search" },
    { opt_name: "REELS", icon_name: "bi-file-play" },
    { opt_name: "CALLS", icon_name: "bi-telephone-fill" },
  ];

  const user_contacts = [
    { person_name: "Riju Das", person_contect_number: 123456789, person_uid: "abc123", person_status: true },
    { person_name: "Anita Sharma", person_contect_number: 987654321, person_uid: "xyz456", person_status: true },
    { person_name: "John Doe", person_contect_number: 654321987, person_uid: "pqr789", person_status: true },
    { person_name: "Emma Watson", person_contect_number: 812345678, person_uid: "lmn012", person_status: true },
    { person_name: "Rahul Verma", person_contect_number: 901234567, person_uid: "uvw345", person_status: true },
    { person_name: "Sophia Brown", person_contect_number: 123987654, person_uid: "def678", person_status: true },
    { person_name: "Arjun Mehta", person_contect_number: 456789123, person_uid: "ghi901", person_status: true },
    { person_name: "Olivia Johnson", person_contect_number: 321456789, person_uid: "rst234", person_status: true },
    { person_name: "Nina Kapoor", person_contect_number: 789123456, person_uid: "jkl567", person_status: true },
    { person_name: "David Miller", person_contect_number: 567890123, person_uid: "opq890", person_status: true },
    { person_name: "Liam Smith", person_contect_number: 890123456, person_uid: "stu123", person_status: true },
    { person_name: "Isla Ray", person_contect_number: 234567890, person_uid: "vwx456", person_status: true },
    { person_name: "Karan Patel", person_contect_number: 678901234, person_uid: "abc789", person_status: true },
    { person_name: "Ella Davis", person_contect_number: 890765432, person_uid: "ghi234", person_status: true },
    { person_name: "Lucas White", person_contect_number: 345678901, person_uid: "rst567", person_status: true },
    { person_name: "Zara Khan", person_contect_number: 765432109, person_uid: "jkl890", person_status: true },
    { person_name: "Noah Wilson", person_contect_number: 432109876, person_uid: "mno123", person_status: true },
    { person_name: "Mia Taylor", person_contect_number: 987012345, person_uid: "uvw456", person_status: true },
    { person_name: "Ethan Walker", person_contect_number: 567123890, person_uid: "opq678", person_status: true },
    { person_name: "Ava Green", person_contect_number: 345901678, person_uid: "stu890", person_status: true },
    { person_name: "James Moore", person_contect_number: 123890456, person_uid: "xyz123", person_status: true }
  ];

  let user_chat = {
    "chat_id": "12345",
    "chat_between": ["abc123", "def678"],
    "sender_details": {
      "sender_name": "Sophia Brown",
      "sender_id": "def678",
    },
    "messages": [
      {
        "sender_id": "abc123",
        "content": "Hello, I am Sayan",
        "date": "1/1/2025",
        "time": "12:00"
      },
      {
        "sender_id": "def678",
        "content": "Ooo, I am Riju",
        "date": "1/1/2025",
        "time": "12:01"
      },
      {
        "sender_id": "abc123",
        "content": "How are you, Riju?",
        "date": "1/1/2025",
        "time": "12:02"
      },
      {
        "sender_id": "def678",
        "content": "I'm doing well, Sayan. What about you?",
        "date": "1/1/2025",
        "time": "12:03"
      },
      {
        "sender_id": "abc123",
        "content": "I'm good too, just working on a project.",
        "date": "1/1/2025",
        "time": "12:04"
      },
      {
        "sender_id": "def678",
        "content": "That sounds interesting! Need any help?",
        "date": "1/1/2025",
        "time": "12:05"
      },
      {
        "sender_id": "abc123",
        "content": "Not right now, but I'll let you know. Thanks!",
        "date": "1/1/2025",
        "time": "12:06"
      },
      {
        "sender_id": "def678",
        "content": "Sure, anytime! What kind of project is it?",
        "date": "1/1/2025",
        "time": "12:07"
      },
      {
        "sender_id": "abc123",
        "content": "It's a chat app, actually. Just like this!",
        "date": "1/1/2025",
        "time": "12:08"
      },
      {
        "sender_id": "def678",
        "content": "Wow, that's cool! Looking forward to seeing it.",
        "date": "1/1/2025",
        "time": "12:09"
      },
    ]
  }

  let details_have_to_display = {
    "from_the_option": "MESSAGES",
    "details": {
      "conversation_with": {
        "person_id": "def456",
      }
    }
  }
  const [user_details, set_user_details] = useState(Own_details);
  const [sidenav_status, set_sidenav_status] = useState(false);
  const [sidenav_selected_opt, set_sidenav_selected_opt] = useState("contects"); // it help to b default open the side option via the 3 line
  const [View_Mode, set_View_Mode] = useState("DARK");
  // const [current_thing_for_display, set_current_thing_for_display] = useState(details_have_to_display);
  const [body_content_have_to_display, set_body_content_have_to_display] = useState(details_have_to_display);




  return (
    <>
      <Somecontext.Provider value={{
        sidenav_status, set_sidenav_status, sidenav_options_icons,
        user_contacts, sidenav_selected_opt, set_sidenav_selected_opt,
        View_Mode, set_View_Mode,
        // current_thing_for_display,set_current_thing_for_display,
        user_chat, user_details, user_details,
        body_content_have_to_display, set_body_content_have_to_display,
      }}>
        {children}
      </Somecontext.Provider>
    </>
  );
}