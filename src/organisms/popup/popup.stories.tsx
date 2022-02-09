import { Story } from '@storybook/react';
import Button from '../../atoms/button/button';
import Textarea from '../../atoms/textarea/textarea';
import { IModalWrapperProps, ModalWrapper } from './popup';

export default {
  title: 'Organisms/Popups',
  component: ModalWrapper,
  parameters: {
    paddings: {
        values: [
            { name: 'without-padding', value: '0' },
            { name: 'with-padding', value: '16px' },
        ],
        default: 'without-padding',
    },
  }, 
  argTypes: {
    title: {
      description: 'Parámetro que recibe para determinar el título del modal',
    },
    children: {
      description: 'Parámetro que recibe para determinar el componente HTML'
    }
  }
};

const Template: Story<IModalWrapperProps> = (args) => <ModalWrapper {...args} />;

export const ModalWrapperComponent = Template.bind({});
ModalWrapperComponent.args = {
  title: 'Lorem ipsum dolor',
  children: 
    <>
      <div className="row-2">
        <Textarea 
          disabled={false} 
          label={'Lorem ipsum'} 
          placeholder={'Lorem ipsum dolor sit...'} 
          size='normal' 
          type='normal'
          visibleLabel={true} />
      </div>
      <div className="row-3">
        <Button disabled={false} size='medium' text='Action' type='btn-primary' />
      </div>
    </>
}
