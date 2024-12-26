import React from 'react';
import { TimelineItem as TimelineItemType, TimelineProps } from '../types';

function TimelineItem({ year, title, organization, description }: TimelineItemType) {
  return (
    <div className="relative pl-[270px] pb-8">
      {/* Year on the left */}
      <div className="absolute left-[-50px] top-2 text-sm font-semibold text-blue-600">
        {year}
      </div>

      {/* Vertical Timeline Line */}
      <div className="absolute left-[220px] top-0 h-full w-[2px] bg-blue-500">
        <div className="absolute left-[-6px] top-2 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-blue-100"></div>
      </div>

      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-lg p-6 ml-[260px]">
        <p className="text-md font-medium text-gray-600">{organization}</p>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <div className="mt-3 text-gray-600 text-justify space-y-2">
          {description.split('\n\n').map((point, i) => (
            <p key={i} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{point.trim().replace('• ', '')}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Timeline({ items, title }: TimelineProps) {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className="space-y-2">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
