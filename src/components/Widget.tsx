import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

export function Widget() {
  return (
    <Popover className='absolute bottom-5 right-5'>
      <div>
        <Popover.Panel>Hello World</Popover.Panel>
      </div>
      <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
        <ChatTeardropDots className='w-6 h-6' />
        <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500'>
          <span className='pl-2'>Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  )
}