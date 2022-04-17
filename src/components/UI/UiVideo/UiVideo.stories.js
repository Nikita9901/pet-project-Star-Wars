import UiVideo from "./UiVideo";
import video from "./video/video.mp4";
import PropTypes from "prop-types";

export default {
  title: "Ui-kit/UiVideo",
  component: UiVideo,
};

const Template = (args) => <UiVideo {...args} />;

const props = {
  src: video,
  playbackRate: 1.0,
  classes: "",
};
export const Default = Template.bind({});
Default.args = {
  ...props,
};
