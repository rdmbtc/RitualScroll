import React from 'react';
import { notFound } from 'next/navigation';
import { designStyles } from '@/lib/design-styles';
import * as Previews from '../previews';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PreviewPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const styleExists = designStyles.some(s => s.id === id);
  
  if (!styleExists) {
    notFound();
  }

  const componentName = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Preview';
  const previews = Previews as Record<string, React.ComponentType>;
  const PreviewComponent = previews[componentName];

  if (!PreviewComponent) {
    notFound();
  }

  return (
    <div className="min-h-screen w-full">
      <PreviewComponent />
    </div>
  );
}

export function generateStaticParams() {
  return designStyles.map((style) => ({
    id: style.id,
  }));
}
