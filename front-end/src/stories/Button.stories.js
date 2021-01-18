import React from 'react';

import Button from '@material-ui/core/Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Material Button',
};

export const Default = () => (
  <Button onClick={action('Default button clicked')} variant="contained">
    Default
  </Button>
);

export const Primary = () => (
  <Button color="primary" onClick={action('Primary button clicked')} variant="contained">
    Primary
  </Button>
);

export const Secondary = () => (
  <Button color="secondary" onClick={action('Secondary button clicked')} variant="contained">
    Secondary
  </Button>
);

// import React from 'react';
// import { Button } from '../components/Button';

// export default {
//   title: 'Example/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };

// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
