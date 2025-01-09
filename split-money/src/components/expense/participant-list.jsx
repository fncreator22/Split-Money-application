'use client';

import { Input } from '../ui/input';

export function ParticipantList({ participants, onUpdate }) {
  return (
    <div className="space-y-2">
      {participants.map((participant, index) => (
        <Input
          key={participant.id}
          value={participant.name}
          onChange={(e) => onUpdate(participant.id, e.target.value)}
          placeholder={`Participant ${index + 1}`}
          className="w-full"
        />
      ))}
    </div>
  );
}
