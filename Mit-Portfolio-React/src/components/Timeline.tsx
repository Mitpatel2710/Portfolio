import React from 'react';
import { TimelineItem as TimelineItemType, TimelineProps } from '../types';

function TimelineItem({ year, title, organization, description }: TimelineItemType) {
  return (
    <div className="relative pl-8 pb-8">
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-200">
        <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-blue-500"></div>
      </div>
      <div className="pt-1">
        <span className="text-sm font-semibold text-blue-500">{year}</span>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-md font-medium text-gray-600">{organization}</p>
        <p className="mt-2 text-gray-600">{description}</p>
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