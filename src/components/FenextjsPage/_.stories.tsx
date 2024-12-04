import React, { PropsWithChildren } from "react";
import { StoryFn, Meta } from "@storybook/react";

import { FenextjsPage,FenextjsPageProps } from "./index";

export default {
    title: "Component/FenextjsPage",
    component: FenextjsPage,
} as Meta;

const Profile: StoryFn<PropsWithChildren<FenextjsPageProps>> = (args) => (
    <FenextjsPage {...args}>Test Children</FenextjsPage>
);

export const Index = Profile.bind({});
const args : FenextjsPageProps = {
    
}
Index.args = args
