import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ChatModal = () => {
  const { showModal } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  return (
    <div
      className="modal modal-sticky modal-sticky-bottom-right show"
      id="kt_chat_modal"
      role="dialog"
      data-backdrop="false"
      aria-modal="true"
      style={{ paddingRight: 17, display: showModal ? "block" : "" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {/*begin::Card*/}
          <div className="card card-custom">
            {/*begin::Header*/}
            <div className="card-header align-items-center px-4 py-3">
              <div className="text-left flex-grow-1">
                {/*end::Dropdown Menu*/}
              </div>
              <div className="text-center flex-grow-1">
                <div className="text-dark-75 font-weight-bold font-size-h5">
                  Matt Pears
                </div>
                <div></div>
              </div>
              <div className="text-right flex-grow-1">
                <button
                  type="button"
                  className="btn btn-clean btn-sm btn-icon btn-icon-md"
                  data-dismiss="modal"
                  onClick={() => {
                    dispatch({
                      type: "HIDE_DISCUSSION",
                    });
                  }}
                >
                  <i className="ki ki-close icon-1x" />
                </button>
              </div>
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className="card-body">
              {/*begin::Scroll*/}
              <div
                className="scroll scroll-pull ps ps--active-y"
                data-height={375}
                data-mobile-height={300}
                style={{ height: 375, overflow: "hidden" }}
              >
                {/*begin::Messages*/}
                <div className="messages">
                  {/*begin::Message In*/}
                  <div className="d-flex flex-column mb-5 align-items-start">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-circle symbol-40 mr-3"></div>
                      <div>
                        <a
                          href="#"
                          className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                        >
                          Matt Pears
                        </a>
                        <span className="text-muted font-size-sm">2 Hours</span>
                      </div>
                    </div>
                    <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                      How likely are you to recommend our company to your
                      friends and family?
                    </div>
                  </div>
                  {/*end::Message In*/}
                  {/*begin::Message Out*/}
                  <div className="d-flex flex-column mb-5 align-items-end">
                    <div className="d-flex align-items-center">
                      <div>
                        <span className="text-muted font-size-sm">
                          3 minutes
                        </span>
                        <a
                          href="#"
                          className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                        >
                          You
                        </a>
                      </div>
                      <div className="symbol symbol-circle symbol-40 ml-3"></div>
                    </div>
                    <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                      Hey there, we’re just writing to let you know that you’ve
                      been subscribed to a repository on GitHub.
                    </div>
                  </div>
                  {/*end::Message Out*/}
                  {/*begin::Message In*/}
                  <div className="d-flex flex-column mb-5 align-items-start">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-circle symbol-40 mr-3"></div>
                      <div>
                        <a
                          href="#"
                          className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                        >
                          Matt Pears
                        </a>
                        <span className="text-muted font-size-sm">
                          40 seconds
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                      Ok, Understood!
                    </div>
                  </div>
                  {/*end::Message In*/}
                  {/*begin::Message Out*/}
                  <div className="d-flex flex-column mb-5 align-items-end">
                    <div className="d-flex align-items-center">
                      <div>
                        <span className="text-muted font-size-sm">
                          Just now
                        </span>
                        <a
                          href="#"
                          className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                        >
                          You
                        </a>
                      </div>
                      <div className="symbol symbol-circle symbol-40 ml-3"></div>
                    </div>
                    <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                      You’ll receive notifications for all issues, pull
                      requests!
                    </div>
                  </div>
                  {/*end::Message Out*/}
                  {/*begin::Message In*/}
                  <div className="d-flex flex-column mb-5 align-items-start">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-circle symbol-40 mr-3"></div>
                      <div>
                        <a
                          href="#"
                          className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                        >
                          Matt Pears
                        </a>
                        <span className="text-muted font-size-sm">
                          40 seconds
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                      You can unwatch this repository immediately by clicking
                      here:
                      <a href="#">https://github.com</a>
                    </div>
                  </div>
                  {/*end::Message In*/}
                  {/*begin::Message Out*/}
                  <div className="d-flex flex-column mb-5 align-items-end">
                    <div className="d-flex align-items-center">
                      <div>
                        <span className="text-muted font-size-sm">
                          Just now
                        </span>
                        <a
                          href="#"
                          className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                        >
                          You
                        </a>
                      </div>
                      <div className="symbol symbol-circle symbol-40 ml-3"></div>
                    </div>
                    <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                      Discover what students who viewed Learn Figma - UI/UX
                      Design. Essential Training also viewed
                    </div>
                  </div>
                  {/*end::Message Out*/}
                  {/*begin::Message In*/}
                  <div className="d-flex flex-column mb-5 align-items-start">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-circle symbol-40 mr-3"></div>
                      <div>
                        <a
                          href="#"
                          className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                        >
                          Matt Pears
                        </a>
                        <span className="text-muted font-size-sm">
                          40 seconds
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 rounded p-5 bg-light-success text-dark-50 font-weight-bold font-size-lg text-left max-w-400px">
                      Most purchased Business courses during this sale!
                    </div>
                  </div>
                  {/*end::Message In*/}
                  {/*begin::Message Out*/}
                  <div className="d-flex flex-column mb-5 align-items-end">
                    <div className="d-flex align-items-center">
                      <div>
                        <span className="text-muted font-size-sm">
                          Just now
                        </span>
                        <a
                          href="#"
                          className="text-dark-75 text-hover-primary font-weight-bold font-size-h6"
                        >
                          You
                        </a>
                      </div>
                      <div className="symbol symbol-circle symbol-40 ml-3"></div>
                    </div>
                    <div className="mt-2 rounded p-5 bg-light-primary text-dark-50 font-weight-bold font-size-lg text-right max-w-400px">
                      Company BBQ to celebrate the last quater achievements and
                      goals. Food and drinks provided
                    </div>
                  </div>
                  {/*end::Message Out*/}
                </div>
                {/*end::Messages*/}
                <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                  <div
                    className="ps__thumb-x"
                    tabIndex={0}
                    style={{ left: 0, width: 0 }}
                  />
                </div>
                <div
                  className="ps__rail-y"
                  style={{ top: 0, right: "-2px", height: 375 }}
                >
                  <div
                    className="ps__thumb-y"
                    tabIndex={0}
                    style={{ top: 0, height: 143 }}
                  />
                </div>
              </div>
              {/*end::Scroll*/}
            </div>
            {/*end::Body*/}
            {/*begin::Footer*/}
            <div className="card-footer align-items-center">
              {/*begin::Compose*/}
              <textarea
                className="form-control border-0 p-0"
                rows={2}
                placeholder="Type a message"
                defaultValue={""}
              />
              <div className="d-flex align-items-center justify-content-between mt-5">
                <div>
                  <button
                    type="button"
                    className="btn btn-primary btn-md text-uppercase font-weight-bold chat-send py-2 px-6"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
              {/*begin::Compose*/}
            </div>
            {/*end::Footer*/}
          </div>
          {/*end::Card*/}
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
