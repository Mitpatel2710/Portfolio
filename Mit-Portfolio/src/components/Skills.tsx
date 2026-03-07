import React from 'react';
import { Skill as SkillType } from '../types';

function SkillBar({ name, level }: SkillType) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export function Skills({ skills }: { skills: SkillType[] }) {
  const categories = ['frontend', 'backend', 'tools'] as const;

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 capitalize mb-4">
              {category}
            </h3>
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}