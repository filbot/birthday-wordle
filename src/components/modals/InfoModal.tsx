import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="The treasure is within your grasp" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        In the realm of men, these are the protectors of ten friends
      </p>
    </BaseModal>
  )
}
