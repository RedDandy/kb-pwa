import { mount } from '@vue/test-utils';
import KbLogo from './Kb-Logo';

describe('KbLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(KbLogo);
    expect(wrapper.vm).toBeTruthy();
  });
});
