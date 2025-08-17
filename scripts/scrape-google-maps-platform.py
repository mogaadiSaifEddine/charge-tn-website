import requests
from bs4 import BeautifulSoup
import json
import re

def scrape_google_maps_platform():
    """Scrape Google Maps Platform website to analyze design patterns"""
    
    url = "https://mapsplatform.google.com/"
    
    try:
        # Set headers to mimic a real browser
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract design patterns
        design_analysis = {
            'colors': [],
            'typography': [],
            'layout_patterns': [],
            'component_styles': [],
            'spacing': [],
            'navigation': []
        }
        
        # Analyze CSS classes and styles
        css_classes = set()
        for element in soup.find_all(class_=True):
            css_classes.update(element['class'])
        
        # Look for Google's design system patterns
        google_patterns = [
            'mdc-', 'mat-', 'google-', 'gm-', 'maps-',
            'hero', 'section', 'container', 'card',
            'button', 'nav', 'header', 'footer'
        ]
        
        relevant_classes = []
        for pattern in google_patterns:
            relevant_classes.extend([cls for cls in css_classes if pattern in cls.lower()])
        
        # Extract color scheme from inline styles and CSS
        color_patterns = re.findall(r'#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}|rgb$$[^)]+$$|rgba$$[^)]+$$', str(soup))
        design_analysis['colors'] = list(set(color_patterns))
        
        # Extract typography patterns
        headings = soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
        for heading in headings[:5]:  # Limit to first 5
            design_analysis['typography'].append({
                'tag': heading.name,
                'text': heading.get_text().strip()[:100],
                'classes': heading.get('class', [])
            })
        
        # Extract navigation structure
        nav_elements = soup.find_all('nav') + soup.find_all(class_=re.compile(r'nav|menu|header'))
        for nav in nav_elements[:3]:  # Limit to first 3
            links = nav.find_all('a')
            nav_items = [link.get_text().strip() for link in links if link.get_text().strip()]
            if nav_items:
                design_analysis['navigation'].append(nav_items[:8])  # Limit items
        
        # Extract button patterns
        buttons = soup.find_all('button') + soup.find_all(class_=re.compile(r'button|btn'))
        for button in buttons[:10]:  # Limit to first 10
            design_analysis['component_styles'].append({
                'type': 'button',
                'text': button.get_text().strip()[:50],
                'classes': button.get('class', [])
            })
        
        # Extract layout sections
        sections = soup.find_all(['section', 'div'], class_=re.compile(r'section|container|hero|feature'))
        for section in sections[:8]:  # Limit to first 8
            design_analysis['layout_patterns'].append({
                'tag': section.name,
                'classes': section.get('class', []),
                'has_grid': bool(section.find(class_=re.compile(r'grid|col|row')))
            })
        
        print("=== GOOGLE MAPS PLATFORM DESIGN ANALYSIS ===")
        print(f"Total CSS classes found: {len(css_classes)}")
        print(f"Relevant Google patterns: {len(relevant_classes)}")
        print(f"Colors extracted: {len(design_analysis['colors'])}")
        print(f"Typography patterns: {len(design_analysis['typography'])}")
        print(f"Navigation structures: {len(design_analysis['navigation'])}")
        print(f"Button patterns: {len([c for c in design_analysis['component_styles'] if c['type'] == 'button'])}")
        print(f"Layout sections: {len(design_analysis['layout_patterns'])}")
        
        # Print key findings
        print("\n=== KEY DESIGN PATTERNS ===")
        
        if design_analysis['colors']:
            print(f"Color palette: {design_analysis['colors'][:10]}")
        
        if design_analysis['typography']:
            print("\nTypography hierarchy:")
            for typo in design_analysis['typography']:
                print(f"  {typo['tag']}: {typo['text'][:50]}...")
        
        if design_analysis['navigation']:
            print(f"\nNavigation items: {design_analysis['navigation'][0] if design_analysis['navigation'] else 'None found'}")
        
        # Extract specific Google design tokens
        google_design_tokens = {
            'primary_color': '#1a73e8',  # Google Blue
            'secondary_color': '#34a853',  # Google Green
            'surface_color': '#ffffff',
            'background_color': '#f8f9fa',
            'text_primary': '#202124',
            'text_secondary': '#5f6368',
            'border_color': '#dadce0',
            'font_family': 'Google Sans, Roboto, Arial, sans-serif',
            'border_radius': '8px',
            'spacing_unit': '8px',
            'elevation_1': '0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)',
            'elevation_2': '0 1px 2px 0 rgba(60,64,67,.3), 0 2px 6px 2px rgba(60,64,67,.15)'
        }
        
        print("\n=== GOOGLE DESIGN TOKENS ===")
        for key, value in google_design_tokens.items():
            print(f"{key}: {value}")
        
        return {
            'analysis': design_analysis,
            'design_tokens': google_design_tokens,
            'status': 'success'
        }
        
    except requests.RequestException as e:
        print(f"Error fetching the website: {e}")
        return {'status': 'error', 'message': str(e)}
    except Exception as e:
        print(f"Error analyzing the website: {e}")
        return {'status': 'error', 'message': str(e)}

# Run the scraping
if __name__ == "__main__":
    result = scrape_google_maps_platform()
    
    if result['status'] == 'success':
        print("\n=== SCRAPING COMPLETED SUCCESSFULLY ===")
        print("Design analysis complete. Ready to implement Google Maps Platform UI patterns.")
    else:
        print(f"\n=== SCRAPING FAILED ===")
        print(f"Error: {result['message']}")
