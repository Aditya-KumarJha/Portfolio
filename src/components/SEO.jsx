import { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * SEO Component - Enhances each section with proper semantic HTML and structured data
 * Helps search engines understand your content better and improves rankings
 * 
 * Usage:
 * <SEO 
 *   title="Your Section Title"
 *   description="Description of this section"
 *   keywords={['keyword1', 'keyword2']}
 *   schema={schemaObject}
 * >
 *   {children}
 * </SEO>
 */

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  schema = null,
  component = 'section',
  id,
  className = '',
  children 
}) => {
  
  // Inject structured data (JSON-LD) if provided
  useEffect(() => {
    if (schema) {
      const scriptId = `schema-${id || title.replace(/\s+/g, '-').toLowerCase()}`;
      
      // Remove existing schema script if present
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }

      // Add new schema script
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);

      // Cleanup on unmount
      return () => {
        const scriptToRemove = document.getElementById(scriptId);
        if (scriptToRemove) {
          scriptToRemove.remove();
        }
      };
    }
  }, [schema, id, title]);

  const Component = component;

  return (
    <Component 
      id={id}
      className={className}
      itemScope={schema ? true : undefined}
      itemType={schema ? `https://schema.org/${schema['@type']}` : undefined}
      aria-label={title}
      data-seo-title={title}
      data-seo-keywords={keywords.join(', ')}
    >
      {/* Hidden SEO-friendly heading for screen readers and search engines */}
      {title && (
        <h1 className="sr-only" itemProp="name">
          {title}
        </h1>
      )}
      
      {/* Hidden description for search engines */}
      {description && (
        <meta itemProp="description" content={description} />
      )}
      
      {/* Hidden keywords meta */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}

      {children}
    </Component>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  schema: PropTypes.object,
  component: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SEO;


/**
 * Pre-configured SEO schemas for different section types
 * Use these to quickly add structured data to your sections
 */

export const createProjectSchema = (project) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: project.name,
  creator: {
    '@type': 'Person',
    name: 'Aditya Kumar Jha',
    url: 'https://adityajha.qzz.io',
  },
  description: project.description,
  keywords: project.keywords?.join(', '),
  url: project.url,
  image: project.image,
  dateCreated: project.dateCreated,
  programmingLanguage: project.technologies,
});

export const createSkillSchema = (skills) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Technical Skills',
  description: 'Full Stack Development Skills and Technologies',
  itemListElement: skills.map((skill, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Thing',
      name: skill,
      description: `Expertise in ${skill}`,
    },
  })),
});

export const createExperienceSchema = (experience) => ({
  '@context': 'https://schema.org',
  '@type': 'WorkExperience',
  name: experience.title,
  description: experience.review,
  startDate: experience.startDate,
  endDate: experience.endDate,
  employer: {
    '@type': 'Organization',
    name: experience.employer || 'Self-employed',
  },
  skills: experience.responsibilities?.join(', '),
});

export const createTestimonialSchema = (testimonial) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  reviewBody: testimonial.review,
  author: {
    '@type': 'Person',
    name: testimonial.name,
    image: testimonial.imgPath,
  },
  itemReviewed: {
    '@type': 'Person',
    name: 'Aditya Kumar Jha',
    jobTitle: 'Full Stack Developer',
  },
});

export const createContactSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Aditya Kumar Jha',
  description: 'Get in touch with Aditya Kumar Jha for web development projects, collaborations, or opportunities',
  mainEntity: {
    '@type': 'Person',
    name: 'Aditya Kumar Jha',
    jobTitle: 'Full Stack Developer',
    email: 'contact@adityajha.qzz.io',
    url: 'https://adityajha.qzz.io',
  },
});
