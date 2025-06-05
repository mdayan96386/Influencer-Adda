import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommentsForAdmin, replyTheCommentByAdmin } from "../../features/admin/adminSlice";
import { toast } from "react-toastify";
import Loader from "../Loader";
import { MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const CommentsListAdmin = () => {
  const { comments, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.admin
  );

  const [activeReplyId, setActiveReplyId] = useState("");
  const [replyText, setReplyText] = useState("");

  const dispatch = useDispatch();

  const handleReplySubmit = (bid) => {
    dispatch(replyTheCommentByAdmin({text: replyText, bid}))
    setReplyText('')
    setActiveReplyId("")
  }

  useEffect(() => {
    dispatch(getAllCommentsForAdmin());

    if ((isError, message)) {
      toast.error(message, { position: "top-center" });
    }
  }, [isError, message]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className=" mx-auto bg-white rounded-lg shadow">
      {/* Comments Header */}
      <div className="border-b border-gray-200 p-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Recent Comments
        </h2>
      </div>

      {/* Comments List */}
      <div className="divide-y divide-gray-200">
        {comments.map((comment) => (
          <div key={comment._id} className="p-4">
            {/* Comment Header - User Info and Date */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">
                  Comment By:{comment.user.name}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleDateString("en-IN")}
              </span>
            </div>

            {/* Comment Message */}
            <p className="text-gray-700 mb-2">{comment.text}</p>
            {/* Booking ID Reference */}
            <div className="text-sm text-gray-500 mb-2">
              Booking Reference: {comment.booking._id}
            </div>

            {/* Reply Button */}
            <button
              onClick={() => setActiveReplyId(comment._id)}
              className="text-blue-600 text-sm hover:text-blue-800"
            >
              Reply
            </button>

            {/* Reply Form */}
            {activeReplyId === comment._id && (
              <div className="mt-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write a reply ... "
                    className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm focus: outline-none focus:border-blue-500"
                  />
                  <button
                    onClick={() => handleReplySubmit(comment.booking._id)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsListAdmin;
