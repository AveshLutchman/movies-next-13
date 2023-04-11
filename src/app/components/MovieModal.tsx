'use client'

import { Modal, ScrollArea } from '@mantine/core';
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

const MovieModal = ({children}:{children:React.ReactNode}) => {
  const router = useRouter()

  const closeModal = useCallback(()=> router.back(),[router])

  return (
    <Modal size={'lg'} opened={true} onClose={closeModal} scrollAreaComponent={ScrollArea.Autosize}>
      {children}
    </Modal>
  );
}

export default MovieModal