'use client'

import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import React from 'react';

const MovieModal = ({children}:{children:React.ReactNode}) => {
  const [opened, { open, close }] = useDisclosure(true);

  return (
    <Modal size={'lg'} opened={opened} onClose={close} title="Movie X">
      {children}
    </Modal>
  );
}

export default MovieModal