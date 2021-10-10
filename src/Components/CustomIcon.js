import { SvgIcon } from "@material-ui/core";
const PhoneIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </SvgIcon>
  );
};
const AddressIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </SvgIcon>
  );
};
const EmailIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </SvgIcon>
  );
};
const FaceBookIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M14.9545 0H5.00594C2.2495 0 0 2.25397 0 5.01587V15C0 17.746 2.2495 20 5.00594 20H14.9703C17.7267 20 19.9762 17.746 19.9762 14.9841V5.01587C19.9604 2.25397 17.7109 0 14.9545 0ZM13.2792 5.59921H12.0792C11.1366 5.59921 10.9545 6.06349 10.9545 6.7381V8.35318H13.0772L12.7842 10.6944H10.9505V16.5873H8.6099V10.6944H6.70099V8.35318H8.6099V6.50794C8.6099 4.50397 9.79406 3.4127 11.5248 3.4127C12.3564 3.4127 13.0653 3.47619 13.2752 3.50397V5.59921H13.2792Z"
        fill="#2C92B1"
      />
    </SvgIcon>
  );
};
const InstaIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M11.7578 10C11.7578 10.9708 10.9708 11.7578 10 11.7578C9.02924 11.7578 8.24219 10.9708 8.24219 10C8.24219 9.02924 9.02924 8.24219 10 8.24219C10.9708 8.24219 11.7578 9.02924 11.7578 10Z"
        fill="#2C92B1"
      />
      <path
        d="M12.9688 4.6875H7.03125C5.73883 4.6875 4.6875 5.73883 4.6875 7.03125V12.9688C4.6875 14.2612 5.73883 15.3125 7.03125 15.3125H12.9688C14.2612 15.3125 15.3125 14.2612 15.3125 12.9688V7.03125C15.3125 5.73883 14.2612 4.6875 12.9688 4.6875ZM10 12.9297C8.38455 12.9297 7.07031 11.6154 7.07031 10C7.07031 8.38455 8.38455 7.07031 10 7.07031C11.6154 7.07031 12.9297 8.38455 12.9297 10C12.9297 11.6154 11.6154 12.9297 10 12.9297ZM13.3594 7.22656C13.0357 7.22656 12.7734 6.96426 12.7734 6.64062C12.7734 6.31699 13.0357 6.05469 13.3594 6.05469C13.683 6.05469 13.9453 6.31699 13.9453 6.64062C13.9453 6.96426 13.683 7.22656 13.3594 7.22656Z"
        fill="#2C92B1"
      />
      <path
        d="M14.7266 0H5.27344C2.36572 0 0 2.36572 0 5.27344V14.7266C0 17.6343 2.36572 20 5.27344 20H14.7266C17.6343 20 20 17.6343 20 14.7266V5.27344C20 2.36572 17.6343 0 14.7266 0ZM16.4844 12.9688C16.4844 14.9072 14.9072 16.4844 12.9688 16.4844H7.03125C5.09277 16.4844 3.51562 14.9072 3.51562 12.9688V7.03125C3.51562 5.09277 5.09277 3.51562 7.03125 3.51562H12.9688C14.9072 3.51562 16.4844 5.09277 16.4844 7.03125V12.9688Z"
        fill="#2C92B1"
      />
    </SvgIcon>
  );
};
const Arrow = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
    </SvgIcon>
  );
};

export { PhoneIcon, AddressIcon, EmailIcon, FaceBookIcon, InstaIcon, Arrow };