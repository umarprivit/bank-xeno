import { useEffect } from 'react';

interface UseDocumentTitleProps {
  title: string;
  description?: string;
}

export const useDocumentTitle = ({ title, description }: UseDocumentTitleProps) => {
  useEffect(() => {
    // Update page title
    document.title = `${title} | BankXeno`;
    
    // Update meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
    
    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | BankXeno`);
    }
    
    // Update Open Graph description
    if (description) {
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);
};

export default useDocumentTitle;
