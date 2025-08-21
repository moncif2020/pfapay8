import {useTranslations} from 'next-intl';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div style={{ 
      padding: '2rem', 
      textAlign: 'center', 
      fontFamily: 'Arial, sans-serif',
      background: '#f8fafc',
      minHeight: '100vh'
    }}>
      <LanguageSwitcher />
      
      <h1 style={{ 
        color: '#0A2463', 
        fontSize: '2.5rem',
        marginBottom: '1rem'
      }}>
        💸 PfaPay
      </h1>
      
      <p style={{ 
        color: '#333', 
        fontSize: '1.2rem',
        marginBottom: '2rem'
      }}>
        {t('description')}
      </p>
      
      <p style={{ 
        color: '#3E92CC', 
        fontWeight: 'bold'
      }}>
        {t('success_message')}
      </p>
    </div>
  );
}
